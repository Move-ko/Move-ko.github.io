export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <title>Move Book</title>

      {props.children}
    </>
  );
}
