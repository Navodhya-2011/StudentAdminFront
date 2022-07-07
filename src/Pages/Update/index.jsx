import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateStudent() {
    const id1 = window.location.pathname.split("/")[3];
    let navigate = useNavigate();
    const location = useLocation();

    const [authId, setAuthId] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [sender, setSender] = useState("");

    useEffect(() => {
        const getData = async () => {
            setAuthId(location.state.authId);
            setTitle(location.state.title);
            setText(location.state.text);
            setSender(location.state.sender);
        };
        getData();
    }, [location]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            authId: authId,
            title: title,
            text: text,
            sender: sender,
        };
        console.log(id1);
        try {
            await axios
            .put("/:id" + id1, {
                headers: {
                    authToken: localStorage.getItem("authToken"),
                },
                data,
            })
            .then((res) => {
                console.log("updated" + res.data);
                setAuthId("");
                setTitle("");
                setText("");
                setSender("");
                setInterval(() => {
                    navigate("/insert")
                }, 2500);
            })
            .catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Update Student Notes
                </h1>
            </div>
            <div className="mx-96 w-1/2">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form 
                        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                        autoComplete="off"
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
                                onChange={(e) =>
                                    setAuthId(e.target.value)
                                }
                                value={authId}
                                placeholder="Author ID"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Title
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                value={title}
                                placeholder="Title"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Text
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) =>
                                    setText(e.target.value)
                                }
                                value={text}
                                placeholder="Text"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Sender
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                onChange={(e) =>
                                    setSender(e.target.value)
                                }
                                value={sender}
                                placeholder="Sender"
                            />
                        </div>
                        <button
                            type="submit"
                            class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateStudent;