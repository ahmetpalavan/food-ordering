import axios from "axios";
import MenuWrapper from "../../components/product/MenuWrapper";

const index = ({ categoryList }) => {
  return (
    <div className="pt-10">
      <MenuWrapper categoryList={categoryList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};

export default index;
