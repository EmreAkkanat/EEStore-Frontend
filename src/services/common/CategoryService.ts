import axios from "axios";
import { Create_Main_Category } from "../../contracts/CreateCategoryContract";

const backendBaseURL: string = process.env.REACT_APP_BASE_URL;

export const createCategory = async (requestData: Create_Main_Category) => {
    try {
        return await axios.post(backendBaseURL + '/mainCategory', requestData);
    } catch (error) {
        return error;
    }
};

