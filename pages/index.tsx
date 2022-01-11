import {Button, Htag, Rating} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
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
