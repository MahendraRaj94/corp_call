import ClientList from "../components/client_list";
import { CiMicrophoneOn, CiMicrophoneOff,CiVideoOn, CiVideoOff } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";

import { v1 as uuid } from "uuid";
const Lobby = (props) => {
  function createMeeting() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }
  return (
    <>
      <div className="flex w-full justify-center sm:flex-row flex-col">
        <div className="container relative h-full mx-auto bg-green-500 p-8 m-8">
          <div className=" flex absolute inset-x-0 right-0 bottom-4 justify-center space-x-4">
          { true ? <CiMicrophoneOff/> : <CiMicrophoneOn/>}
          { true ? <CiVideoOff/> : <CiVideoOn/>}
          <PiPhoneCallLight/>
          </div>
        </div>
        <div className="flex items-center mx-4">
          <button
            type="button"
            class="text-white bg-blue-700 text-block hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Join Meeting
          </button>
        </div>
      </div>
    </>
  );
};

export default Lobby;
