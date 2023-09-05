import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { QuestionsProvider } from "@/context/QuestionsContext";

export default function Home() {
  return (
    <>
      <QuestionsProvider>
        <Header />
        <Main />
        <Footer />
      </QuestionsProvider>
    </>
  );
}
