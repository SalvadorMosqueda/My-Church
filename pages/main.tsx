// pages/index.tsx
import { GetServerSideProps } from "next";
import { parse } from "cookie";


import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function IndexPage() {


  return (
    <DefaultLayout>
      <section className="flex flex-col   gap-4 items-center justify-between   md:py-10">
        <div className="   inline-block  font-serif max-w-xl text-center justify-center">
          <span className={title()}>
            Sistema&nbsp;{" "}
            <span className={title({ color: "violet" })}>Celular&nbsp;</span>
          </span>

          <br />
        </div>
        <img className="h-20 " src="/images/iafcj.png" alt="Fondo" />

        {/* <div className="flex justify-end">
          <span className={title()}>
            Semana de&nbsp;{" "}
            <span className={title({ color: "violet" })}>Orar!&nbsp;</span>
          </span>
        </div> */}

        <img className="mt-5" src="/images/sis.jpeg" alt="Fondo" />
      </section>
    </DefaultLayout>
  );
}
