import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ReportForm from "./ReportForm";

export default function Reportes() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-6">
        <div className="inline-block max-w-lg text-center justify-center">
          <ReportForm />
        </div>
      </section>
    </DefaultLayout>
  );
}
