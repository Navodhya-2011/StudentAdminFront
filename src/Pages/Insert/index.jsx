import React, { useState } from "react";
import axios from "axios";

function InsertNote(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [authId, setAuthId] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [sender, setSender] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            authId: setAuthId,
            title: setTitle,
            text: setText,
            sender: setSender,
        };

        try {
            await axios
                .post("/api/tutorial/add", {
                    headers: {
                        authToken: localStorage.getItem("authToken"),
                    },
                    data,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <>
            
            
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Create Your Note
                </h1>
            </div>

            <div className="mx-96">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Author ID
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Author ID"
                                onChange={(e) =>
                                    setAuthId(e.target.value)
                                }
                            />
                        </div>
                    </form>
                </div>    
            </div>       
                    
        </>
    );
}

export default InsertNote;