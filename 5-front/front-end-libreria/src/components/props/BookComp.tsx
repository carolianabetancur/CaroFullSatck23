const BookComp = ({ title, author }: { title: string; author: string }) => {
  return (
    <div style={{ border: '1px solid #CCC', margin: '0px 20px' }}>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
};

export default BookComp;
