import { useToast } from "vue-toastification";
import {POSITION} from "vue-toastification/src";

export function useToastification() {

    const toast = useToast();

    const success = (message :string) => {
        toast.success(message, {
            position: POSITION.BOTTOM_RIGHT,
            timeout: 1000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            hideProgressBar: true,
            icon: true,
        });
    };

    const error = (message = "Error!") => {
        toast.error(message, {
            position: POSITION.BOTTOM_RIGHT,
            timeout: 5000,
        });
    };

    return {success, error};
}