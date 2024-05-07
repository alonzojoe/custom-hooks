import useCounter from "../hooks/use-count";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
