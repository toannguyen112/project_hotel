import React from 'react'

function Button({ callBack }) {
    return (
        <button
            onClick={callBack}
            style={{ backgroundImage: "linear-gradient(90deg,#f79441,#f25f58)" }} className="outline-none  border-none text-white p-3 font-semibold text-center w-full rounded-md py-2 focus:outline-none ">Áp dụng</button>

    )
}

export default Button
