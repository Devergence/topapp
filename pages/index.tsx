import {Button, Htag, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(3);
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary' arrow='down'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory= 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUNLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}