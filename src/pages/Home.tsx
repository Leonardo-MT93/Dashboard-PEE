// import CarouselHomepage from "@/components/CarouselHomepage";
// import { Collaborators } from "@/components/Collaborators";
// import Notices from "@/components/Notices";

import SelectionPage from "./SelectionPage";

const Home = () => {
  return (
    <>
      <main className="flex items-center flex-col w-full min-h-screen">
        <h1 className="text-5xl font-bold text-center mt-20">Página de edición de la web</h1>
        <h2 className="text-3xl font-bold text-center mt-5">Por Ellos Ezeiza</h2>
        <SelectionPage />
      </main>
    </>
  );
};

export default Home;
