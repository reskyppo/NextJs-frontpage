import {toast} from 'react-toastify'

function errorHandler(error) {
    if (error) {
        let message;
        if (error.message) {
            if (error.response.status === 500) message = "Something wnet terribly wrong"
            else message = <error className="response data messa"></error>
        
            if (typeof message === "string") toast.error(message)

            return Promise.reject(error);
        }
    }
}

export default errorHandler
