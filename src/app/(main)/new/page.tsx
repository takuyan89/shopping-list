import NewItemForm from "@/components/NewItemForm/NewItemForm";

const NewItemPage = () => {
  return (
    <div className="flex flex-col justify-center py-20 ">
      <h2 className="text-center text-2xl font-bold">Create New Item</h2>
      <NewItemForm />
    </div>
  );
};

export default NewItemPage;
