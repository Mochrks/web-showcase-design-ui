"use client";

import { Template } from "@/lib/templates-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { generateThemeConfig } from "@/lib/theme-generator";
import { generateCompleteProject } from "@/lib/download-generator";
import { ColorPaletteEditor } from "@/components/color-palette-editor";
import { generateFontCSS } from "@/lib/font-config";
import JSZip from "jszip";

interface DesignSystemContentProps {
    template: Template;
}

export function DesignSystemContent({ template: initialTemplate }: DesignSystemContentProps) {
    const [downloadFramework, setDownloadFramework] = useState<"nextjs" | "react">("nextjs");
    const [template, setTemplate] = useState(initialTemplate);
    const [isDownloading, setIsDownloading] = useState(false);

    const themeConfig = useMemo(() => generateThemeConfig(template), [template]);
    const styles = themeConfig.componentStyles;
    const fontCSS = generateFontCSS(template);

    const handleColorsChange = (colors: Template["colors"]) => {
        setTemplate({ ...template, colors });
    };

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const projectStructure = generateCompleteProject(template, downloadFramework, themeConfig);
            const zip = new JSZip();

            // Add all files to zip
            Object.entries(projectStructure.files).forEach(([path, content]) => {
                zip.file(path, content);
            });

            // Generate and download zip
            const blob = await zip.generateAsync({ type: "blob" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${projectStructure.name}.zip`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Inject CSS variables and fonts for live preview */}
            <style dangerouslySetInnerHTML={{
                __html: `
                ${themeConfig.cssVariables}
                ${fontCSS}
            ` }} />

            {/* Header */}
            <div className="border-b sticky top-0 bg-background/80 backdrop-blur-lg z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back
                                </Button>
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold">{template.name}</h1>
                                <p className="text-sm text-muted-foreground">Design System</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Link href={`/templates/${template.slug}/preview`}>
                                <Button variant="outline">View Preview</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Color Palette Editor */}
                            <ColorPaletteEditor
                                template={template}
                                onColorsChange={handleColorsChange}
                            />

                            {/* Download Section */}
                            <Card className={styles.card}>
                                <CardHeader>
                                    <CardTitle className="text-lg">Download Template</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Framework</Label>
                                        <RadioGroup
                                            value={downloadFramework}
                                            onValueChange={(value) =>
                                                setDownloadFramework(value as "nextjs" | "react")
                                            }
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="nextjs" id="nextjs" />
                                                <Label htmlFor="nextjs" className="font-normal cursor-pointer">
                                                    Next.js 15
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="react" id="react" />
                                                <Label htmlFor="react" className="font-normal cursor-pointer">
                                                    React 18 + Vite
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <Button
                                        className={`w-full ${styles.button}`}
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                    >
                                        {isDownloading ? (
                                            <>
                                                <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4 mr-2" />
                                                Download {downloadFramework === "nextjs" ? "Next.js" : "React"}
                                            </>
                                        )}
                                    </Button>
                                    <p className="text-xs text-muted-foreground">
                                        Complete project with components, layouts, and configurations
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {/* Typography */}
                            <ComponentSection title="Typography">
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-bold">Heading 1</h1>
                                    <h2 className="text-3xl font-bold">Heading 2</h2>
                                    <h3 className="text-2xl font-bold">Heading 3</h3>
                                    <h4 className="text-xl font-bold">Heading 4</h4>
                                    <p className="text-base text-foreground">
                                        This is a paragraph with regular text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        This is small muted text for secondary information.
                                    </p>
                                </div>
                            </ComponentSection>

                            {/* Buttons */}
                            <ComponentSection title="Buttons">
                                <div className="flex flex-wrap gap-4">
                                    <Button className={styles.button}>Default</Button>
                                    <Button variant="secondary" className={styles.button}>Secondary</Button>
                                    <Button variant="outline" className={styles.button}>Outline</Button>
                                    <Button size="sm" className={styles.button}>Small</Button>
                                    <Button size="lg" className={styles.button}>Large</Button>
                                </div>
                            </ComponentSection>

                            {/* Cards */}
                            <ComponentSection title="Cards">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card className={styles.card}>
                                        <CardHeader>
                                            <CardTitle>Card Title</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                This is a card component with header and content.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className={styles.card}>
                                        <CardContent className="pt-6">
                                            <p className="text-sm text-muted-foreground">
                                                This is a card with only content section.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ComponentSection>

                            {/* Badges */}
                            <ComponentSection title="Badges">
                                <div className="flex flex-wrap gap-2">
                                    <Badge className={styles.badge}>Default</Badge>
                                    <Badge variant="secondary" className={styles.badge}>Secondary</Badge>
                                    <Badge variant="outline" className={styles.badge}>Outline</Badge>
                                </div>
                            </ComponentSection>

                            {/* Inputs */}
                            <ComponentSection title="Form Inputs">
                                <div className="space-y-4 max-w-md">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Enter your email" className={styles.input} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Enter password" className={styles.input} />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms">Accept terms and conditions</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="notifications" />
                                        <Label htmlFor="notifications">Enable notifications</Label>
                                    </div>
                                </div>
                            </ComponentSection>

                            {/* Alerts */}
                            <ComponentSection title="Alerts">
                                <div className="space-y-4">
                                    <Alert className={styles.card}>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            This is a default alert component.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </ComponentSection>

                            {/* Tabs */}
                            <ComponentSection title="Tabs">
                                <Tabs defaultValue="tab1" className="w-full">
                                    <TabsList>
                                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="tab1">
                                        <Card className={styles.card}>
                                            <CardContent className="pt-6">
                                                <p className="text-sm text-muted-foreground">
                                                    Content for tab 1
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="tab2">
                                        <Card className={styles.card}>
                                            <CardContent className="pt-6">
                                                <p className="text-sm text-muted-foreground">
                                                    Content for tab 2
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </ComponentSection>

                            {/* Button Variants */}
                            <ComponentSection title="Button Variants">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-3">
                                        <Button className={styles.button}>Primary</Button>
                                        <Button variant="secondary" className={styles.button}>Secondary</Button>
                                        <Button variant="destructive">Destructive</Button>
                                        <Button variant="outline" className={styles.button}>Outline</Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button variant="link">Link</Button>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Button size="sm" className={styles.button}>Small</Button>
                                        <Button size="default" className={styles.button}>Default</Button>
                                        <Button size="lg" className={styles.button}>Large</Button>
                                        <Button size="icon" className={styles.button}>
                                            <AlertCircle className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Button disabled className={styles.button}>Disabled</Button>
                                        <Button className={styles.button}>
                                            <Download className="mr-2 h-4 w-4" />
                                            With Icon
                                        </Button>
                                    </div>
                                </div>
                            </ComponentSection>

                            {/* Card Variants */}
                            <ComponentSection title="Card Variants">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Card className={styles.card}>
                                        <CardHeader>
                                            <CardTitle>Simple Card</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                A simple card with title and content.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className={styles.card}>
                                        <CardHeader>
                                            <CardTitle>Card with Badge</CardTitle>
                                            <Badge className={`w-fit ${styles.badge}`}>New</Badge>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Card featuring a badge component.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className={styles.card}>
                                        <CardHeader>
                                            <CardTitle>Interactive Card</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <p className="text-sm text-muted-foreground">
                                                Card with interactive elements.
                                            </p>
                                            <Button size="sm" className={`w-full ${styles.button}`}>
                                                Action
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ComponentSection>

                            {/* Badge Variants */}
                            <ComponentSection title="Badge Variants">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className={styles.badge}>Default</Badge>
                                        <Badge variant="secondary" className={styles.badge}>Secondary</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                        <Badge variant="outline" className={styles.badge}>Outline</Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className={`${styles.badge} text-xs`}>Small</Badge>
                                        <Badge className={`${styles.badge} text-sm`}>Medium</Badge>
                                        <Badge className={`${styles.badge} text-base`}>Large</Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className={styles.badge}>
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            With Icon
                                        </Badge>
                                        <Badge className={styles.badge}>
                                            Status: Active
                                        </Badge>
                                        <Badge className={styles.badge}>
                                            99+
                                        </Badge>
                                    </div>
                                </div>
                            </ComponentSection>

                            {/* Form Elements */}
                            <ComponentSection title="Form Elements">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email-form">Email Address</Label>
                                            <Input
                                                id="email-form"
                                                type="email"
                                                placeholder="john@example.com"
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-3">
                                            <Label>Preferences</Label>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref1" />
                                                    <Label htmlFor="pref1" className="font-normal">
                                                        Email notifications
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref2" />
                                                    <Label htmlFor="pref2" className="font-normal">
                                                        SMS notifications
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref3" />
                                                    <Label htmlFor="pref3" className="font-normal">
                                                        Push notifications
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Label>Settings</Label>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <Label htmlFor="dark-mode" className="font-normal">
                                                        Dark Mode
                                                    </Label>
                                                    <Switch id="dark-mode" />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <Label htmlFor="auto-save" className="font-normal">
                                                        Auto Save
                                                    </Label>
                                                    <Switch id="auto-save" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ComponentSection>

                            {/* Alert Variants */}
                            <ComponentSection title="Alert Variants">
                                <div className="space-y-4">
                                    <Alert className={styles.card}>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Information</AlertTitle>
                                        <AlertDescription>
                                            This is an informational alert message.
                                        </AlertDescription>
                                    </Alert>
                                    <Alert className={`${styles.card} border-green-500 text-green-700 dark:text-green-400`}>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Success</AlertTitle>
                                        <AlertDescription>
                                            Your changes have been saved successfully.
                                        </AlertDescription>
                                    </Alert>
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>
                                            Something went wrong. Please try again.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </ComponentSection>

                            {/* Table Section */}
                            <ComponentSection title="Data Tables">
                                <Card className={styles.card}>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Invoice</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {[
                                                { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
                                                { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
                                                { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
                                            ].map((invoice) => (
                                                <TableRow key={invoice.id}>
                                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                                    <TableCell>
                                                        <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>
                                                            {invoice.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{invoice.method}</TableCell>
                                                    <TableCell className="text-right">{invoice.amount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Card>
                            </ComponentSection>

                            {/* Accordion Section */}
                            <ComponentSection title="Accordion">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design patterns.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Can it be customized?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. You can change themes, colors and fonts easily.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </ComponentSection>

                            {/* Breadcrumbs & Pagination */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ComponentSection title="Breadcrumbs">
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/templates">Templates</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Current Template</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </ComponentSection>

                                <ComponentSection title="Pagination">
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#" isActive>1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </ComponentSection>
                            </div>

                            {/* Feedback & Loading */}
                            <ComponentSection title="Feedback & Loading">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Loading Progress</span>
                                            <span>75%</span>
                                        </div>
                                        <Progress value={75} className="h-2" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-4">
                                            <Skeleton className="h-12 w-12 rounded-full" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-[250px]" />
                                                <Skeleton className="h-4 w-[200px]" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Skeleton className="h-[125px] w-full rounded-xl" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-full" />
                                                <Skeleton className="h-4 w-3/4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ComponentSection>

                            {/* Complex Components */}
                            <ComponentSection title="Advanced Layouts">
                                <div className="space-y-6">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "Total Users", value: "10,234", change: "+12%", color: "primary" },
                                            { label: "Revenue", value: "$45,231", change: "+8%", color: "accent" },
                                            { label: "Active Now", value: "573", change: "+23%", color: "primary" },
                                            { label: "Conversion", value: "24.5%", change: "+4%", color: "accent" },
                                        ].map((stat, i) => (
                                            <Card key={`stat-${i}`} className={`${styles.card} overflow-hidden`}>
                                                <div className={`h-1 w-full bg-${stat.color}`} />
                                                <CardContent className="pt-6">
                                                    <div className="space-y-2">
                                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                                                        <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                                                        <div className="flex items-center text-xs font-medium text-green-500">
                                                            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                                            </svg>
                                                            {stat.change}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Feature List */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Card className={styles.card}>
                                            <CardHeader>
                                                <CardTitle>Included Features</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-3">
                                                {[
                                                    "Advanced Analytics Dashboard",
                                                    "Real-time Collaboration",
                                                    "Cloud Storage Integration",
                                                    "API Access & Webhooks",
                                                    "Custom Domain Support",
                                                    "Priority Email Support",
                                                ].map((feature, i) => (
                                                    <div key={`feature-${i}`} className="flex items-center space-x-3">
                                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>

                                        <Card className={`${styles.card} bg-primary text-primary-foreground`}>
                                            <CardHeader>
                                                <CardTitle>Pro Plan Upgrade</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <p className="text-primary-foreground/80 text-sm">
                                                    Unlock every single template and get lifetime updates with our professional license.
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="text-4xl font-bold">$99</div>
                                                    <p className="text-xs opacity-70 border-t border-primary-foreground/20 pt-2">ONE-TIME PAYMENT • LIFETIME ACCESS</p>
                                                </div>
                                                <Button variant="secondary" className="w-full font-bold">
                                                    Get Lifetime Access
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </ComponentSection>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ComponentSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <Separator className="mt-2" />
            </div>
            <div className="bg-muted/10 rounded-lg p-6">{children}</div>
        </div>
    );
}
