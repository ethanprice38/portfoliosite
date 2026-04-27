import VisualEssayPage from "@/components/presentation/VisualEssayPage";

type PresentationPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PresentationPage({
  searchParams,
}: PresentationPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const variantParam = resolvedSearchParams.variant;
  const variant = Array.isArray(variantParam) ? variantParam[0] : variantParam;

  return (
    <VisualEssayPage variant={variant === "concise" ? "concise" : "standard"} />
  );
}
