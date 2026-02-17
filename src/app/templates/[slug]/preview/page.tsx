import { notFound } from "next/navigation";
import { templates } from "@/lib/templates-data";
import { PreviewContent } from "@/components/preview-content";

export async function generateStaticParams() {
    return templates.map((template) => ({
        slug: template.slug,
    }));
}

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const template = templates.find((t) => t.slug === slug);

    if (!template) {
        notFound();
    }

    return <PreviewContent template={template} />;
}
