import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const students = [
        {id: 1, name: "Nina Angela", srcode: "24-23467", program: "BSIT" },
        {id: 2, name: "Sophia Pola", srcode: "24-21468", program: "BSCS" },
        {id: 3, name: "Wilmarc Venn", srcode: "24-25469", program: "BSIT" },
    ];
    return (
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    )
}

export default StudentPage;