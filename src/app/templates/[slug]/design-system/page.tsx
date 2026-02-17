import { notFound } from "next/navigation";
import { templates } from "@/lib/templates-data";
import { DesignSystemContent } from "@/components/design-system-content";

export async function generateStaticParams() {
    return templates.map((template) => ({
        slug: template.slug,
    }));
}

export default async function DesignSystemPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const template = templates.find((t) => t.slug === slug);

    if (!template) {
        notFound();
    }

    return <DesignSystemContent template={template} />;
}
