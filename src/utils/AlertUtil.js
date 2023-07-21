import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//===========================================
//.. Debugging Alerts For Api Loading 
//===========================================
export const APIAlert = (msg) => ({

	success: () => {
		toast.success(msg, {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 1000,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
		})
	},
	error: () => { 
		toast.error(msg, {
		position: toast.POSITION.BOTTOM_RIGHT,
		autoClose: 2200,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		})
	}
});

//===========================================