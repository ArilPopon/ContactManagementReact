import Swal from "sweetalert2"

export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'success',
        text: message
    })
}

export const alertError = async (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'error',
        text: message
    })
}

export const alerConfirm = async (message) => {
    const result = await Swal.fire({
        icon: 'question',
        title: 'Are You Sure?',
        text: message,
        showCancelButton: true,
        confirmButtonColor: `#d33`,
        cancelButtonColor: `#3085d6`,
        confirmButtonText: `Yes`
    })
    return result.isConfirmed;
} 