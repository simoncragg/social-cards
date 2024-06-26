import { FormEvent, useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import { addPostAsync } from "../services/FeedService";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { userId } = useAuth();
  const [ isSaving, setIsSaving ] = useState(false); 
  
  const submitPost = async (event: FormEvent<HTMLFormElement> ) => {
    event?.preventDefault();
    setIsSaving(true);
    await addPostAsync({
      userId,
      message: messageRef.current?.value ?? "",
    });
    setIsSaving(false);
    navigate("/echoes");
  };

  return (
    <div className="w-full h-screen md:w-1/2">
      <h1 className="text-2xl font-semibold mb-8">New Echo</h1>
      <form className="max-w-sm mx-auto" onSubmit={submitPost}>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            rows={5}
            className="bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-300 block w-full p-2.5 outline-none"
            placeholder="Enter message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex justify-center text-white bg-cyan-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-cyan-950/90"
          disabled={isSaving}
        >
          <span className={`${isSaving ? "hidden" : ""}`}>Post</span>
          <ImSpinner9 className={`w-6 h-6 text-white animate-spin ${isSaving ? "" : "hidden"}`}/>
        </button>
      </form>
    </div>
  );
};

export default NewPost;
