import { useContext, useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import { postMessage } from "../../context/postmessagecontext/ApiCall";
import { PostMessageContext } from "../../context/postmessagecontext/PostMessageContext";
import "./Center.css";
const Center = ({ data }) => {
  const { desc } = data.item || "";

  const [message, setMessage] = useState("");

  const { dispatch } = useContext(PostMessageContext);

  const handleClick = (e) => {
    e.preventDefault()
    postMessage(dispatch, message);
  };

  console.log(JSON.parse(localStorage.getItem("token")).payload.token);

  return (
    <div className="center">
      
        {data ? (
            <div className="center-container">
                <div className="center-top-bar">
                    asdsa
                </div>
                <div className="messages">
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUBAgYD/8QANxAAAgICAAMFBQcCBwEAAAAAAAECAwQRBRIhEzFBUWEGFCJxsSMyUoGRodFCwSQzQ4KSouEV/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIhEAAgMAAgICAwEAAAAAAAAAAAECAxESMQQhMkETM2Ei/9oADAMBAAIRAxEAPwDswAAAAAAYGwDIIl3EsSh6nfDfknt/sRJcfxF91Wy+Uf5ZFyS7LFVOXSLYFRH2hxW+sLl/tX8kirjGHb07ZRb/ABrQU4v7Dqmu0TwaxmpLcWmn4pmSRWZAAAAAAAAAAAAMbDKTjHFnU5Y+NL4/6p+XoiMpKK1k665WSxEriHFqcTcI/aW/hXcvmUGVxHJy2+0saj+GPREUGWVjketV48K/f2AV2Vmz53CmWku+XmRO2tf+pP8A5FkaJNaQn5cYvEi8BSxy7491svz6nrHiN0fvKMvy0H48ji8yD7LqjJuxpc1NkoeifT9C7weOxsahlpQl3c67n/BzWPfG+HNHo+5ryPUqUpQeFs6q7Vp3SkmtoyctwvissSSqublQ/wDodPGSkk4tNPqmjVCakjyrapVPGbAAmVAAAAwZMMAruMZ/umPywf2s+kfT1OW7+/vJXEcl5WZZZv4U+WPyRFMdkuTPZ8er8cP6weOVb2NEpePdH5nsQeKf5dfzZytcpJE7pONbaIVFFuRaq6YOc34Iny9n8+Md8tUvSM+v7lt7OY8YYCuS+O2T2/RPSLY0zuaeI8uNaa1nJ18Azpv4o11rzlP+Dyz+E5GBBTm4zrb1zR30fqdieWVQsjGtqkuk4tHFdLTrqWHI8Mb7eS8HHqWZVcNlq/TXVxLUqv8AmbvE/WC74DntS91tfR9a9+HoUhmEnCcZxepRe0yuMuL0utrVkcO5Rk8MPIWTi13L+pbfoz2NyPDax4ZAAOAicTudGBdNPT5dL5voSyp9opcuAl+KxL6v+xGTxaWVLlNI5oAGE90Gs8VZcHByceVcyaNj2xH9tr8S0di8ZCxbBo3oornwTG5+2nBV8zhVLl33t7/c24PVTOtZONLJjU9xULJ7izT2cyFPEnjSfx0yfT0f/uy3SUVpJJeSL5PNR5kVuM88il31OtTsg341vUn6FTw2vFsyLPd1lwnTLllN2bW+vet+jLs0nKFNc7JajGK5pMjGWLDrjr059YEIZ+bZCXw1z0l81t/U3McPulbh5V8/vW3N/QyRsb5GzxfgAAVmo6H2ct5seypv7str5MuTm/ZyWsy2PnXv9Gv5OkRsrexPF8mPG1mQAWGcFR7RreDBrwsX0ZbkDjNfacOu6b5VzfoRmtiyyp5YmcmADCe6Am4tNdGmAARuCRceNyXNrpPfqWWJkcRz+eyqVEKXNxgnDbkl+aKvKw+1l2lT5bF662SuGcToxMX3TNUq51ttbi3vfXwNeqS1HlTg65Y+ixnRxWEdqymL8Oatfp94r8zLtyuAXO7lhdC1Qmo9N6kj0xOPYvZTnkQ7OxP4YxTe19EVXu9mZfO6xOuuybnrz35fyEuPuXojjn6j7JOBtYcU+5tvRINYxUIqMVpLuNjNJ69PUrjwikAARLC29nF/jpvwVT+qOkKL2br6XW68VFfX+5eo2VL/ACeN5T21mQAWGYGs4qUXF9U1pmxgA4rJplj5FlUv6XpfLwPI6Dj+C5wWVXHcoLU9eXmc+Ypx4s9uiz8kEwAlt6XV+RKp4dk3dVW4Lzn0IqLfRZKcY+2yNFc0kl4vRJycWu2PLdBTj4PxRI9yWLZ8T5pa2n4G5JbFmWyas66Kynh+NTLmjXuXg5Pej0yF1T/InOEX4Iw6Y2rs+Xv7g25EYNQelYCxv4PdBt0tWJeHcyBZVZU9WwlB+q0ccWuzVC2E+magFlwXC95ye0mvsqnv5vwRyK5PDtk1CLky94Xje7YNcGtSa3L5smGEZNyWLDwpPk9YAB04AAAYkk1p9Sq/+Pi1TlPk503vTfSJbGGcaT7JKUo9Mg11V1LVcIx+S0bHtOnxj+h5a0TWEG2+zwvoVsdP4dfdfkQbKLK38UX811LQxy67m0VyrUvZOFrh6KqNU5PUYSf5EzHxuyfNLTn5fhJOt97bMpJI5GpR9kp3OSwLotBpNaaTXkwekKnLv6ItKURJcNxr97pivNx6MnY+PXi0xqqWoxPWMVFaRkhi0nyk1jZgyAdOAAAAAAAAAA1lFSXVbNgAeLoXg9GvYS80SAd05hH7CXmjZUeb/Q9TJzRhpGuMe5G4AOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUBAgYD/8QANxAAAgICAAMFBQcCBwEAAAAAAAECAwQRBRIhEzFBUWEGFCJxsSMyUoGRodFCwSQzQ4KSouEV/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIhEAAgMAAgICAwEAAAAAAAAAAAECAxESMQQhMkETM2Ei/9oADAMBAAIRAxEAPwDswAAAAAAYGwDIIl3EsSh6nfDfknt/sRJcfxF91Wy+Uf5ZFyS7LFVOXSLYFRH2hxW+sLl/tX8kirjGHb07ZRb/ABrQU4v7Dqmu0TwaxmpLcWmn4pmSRWZAAAAAAAAAAAAMbDKTjHFnU5Y+NL4/6p+XoiMpKK1k665WSxEriHFqcTcI/aW/hXcvmUGVxHJy2+0saj+GPREUGWVjketV48K/f2AV2Vmz53CmWku+XmRO2tf+pP8A5FkaJNaQn5cYvEi8BSxy7491svz6nrHiN0fvKMvy0H48ji8yD7LqjJuxpc1NkoeifT9C7weOxsahlpQl3c67n/BzWPfG+HNHo+5ryPUqUpQeFs6q7Vp3SkmtoyctwvissSSqublQ/wDodPGSkk4tNPqmjVCakjyrapVPGbAAmVAAAAwZMMAruMZ/umPywf2s+kfT1OW7+/vJXEcl5WZZZv4U+WPyRFMdkuTPZ8er8cP6weOVb2NEpePdH5nsQeKf5dfzZytcpJE7pONbaIVFFuRaq6YOc34Iny9n8+Md8tUvSM+v7lt7OY8YYCuS+O2T2/RPSLY0zuaeI8uNaa1nJ18Azpv4o11rzlP+Dyz+E5GBBTm4zrb1zR30fqdieWVQsjGtqkuk4tHFdLTrqWHI8Mb7eS8HHqWZVcNlq/TXVxLUqv8AmbvE/WC74DntS91tfR9a9+HoUhmEnCcZxepRe0yuMuL0utrVkcO5Rk8MPIWTi13L+pbfoz2NyPDax4ZAAOAicTudGBdNPT5dL5voSyp9opcuAl+KxL6v+xGTxaWVLlNI5oAGE90Gs8VZcHByceVcyaNj2xH9tr8S0di8ZCxbBo3oornwTG5+2nBV8zhVLl33t7/c24PVTOtZONLJjU9xULJ7izT2cyFPEnjSfx0yfT0f/uy3SUVpJJeSL5PNR5kVuM88il31OtTsg341vUn6FTw2vFsyLPd1lwnTLllN2bW+vet+jLs0nKFNc7JajGK5pMjGWLDrjr059YEIZ+bZCXw1z0l81t/U3McPulbh5V8/vW3N/QyRsb5GzxfgAAVmo6H2ct5seypv7str5MuTm/ZyWsy2PnXv9Gv5OkRsrexPF8mPG1mQAWGcFR7RreDBrwsX0ZbkDjNfacOu6b5VzfoRmtiyyp5YmcmADCe6Am4tNdGmAARuCRceNyXNrpPfqWWJkcRz+eyqVEKXNxgnDbkl+aKvKw+1l2lT5bF662SuGcToxMX3TNUq51ttbi3vfXwNeqS1HlTg65Y+ixnRxWEdqymL8Oatfp94r8zLtyuAXO7lhdC1Qmo9N6kj0xOPYvZTnkQ7OxP4YxTe19EVXu9mZfO6xOuuybnrz35fyEuPuXojjn6j7JOBtYcU+5tvRINYxUIqMVpLuNjNJ69PUrjwikAARLC29nF/jpvwVT+qOkKL2br6XW68VFfX+5eo2VL/ACeN5T21mQAWGYGs4qUXF9U1pmxgA4rJplj5FlUv6XpfLwPI6Dj+C5wWVXHcoLU9eXmc+Ypx4s9uiz8kEwAlt6XV+RKp4dk3dVW4Lzn0IqLfRZKcY+2yNFc0kl4vRJycWu2PLdBTj4PxRI9yWLZ8T5pa2n4G5JbFmWyas66Kynh+NTLmjXuXg5Pej0yF1T/InOEX4Iw6Y2rs+Xv7g25EYNQelYCxv4PdBt0tWJeHcyBZVZU9WwlB+q0ccWuzVC2E+magFlwXC95ye0mvsqnv5vwRyK5PDtk1CLky94Xje7YNcGtSa3L5smGEZNyWLDwpPk9YAB04AAAYkk1p9Sq/+Pi1TlPk503vTfSJbGGcaT7JKUo9Mg11V1LVcIx+S0bHtOnxj+h5a0TWEG2+zwvoVsdP4dfdfkQbKLK38UX811LQxy67m0VyrUvZOFrh6KqNU5PUYSf5EzHxuyfNLTn5fhJOt97bMpJI5GpR9kp3OSwLotBpNaaTXkwekKnLv6ItKURJcNxr97pivNx6MnY+PXi0xqqWoxPWMVFaRkhi0nyk1jZgyAdOAAAAAAAAAA1lFSXVbNgAeLoXg9GvYS80SAd05hH7CXmjZUeb/Q9TJzRhpGuMe5G4AOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>
                <div className="incoming-message">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  {data && <p className="incoming">{desc}</p>}
                </div>

                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
                <div className="outgoing-message">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0oOPjm3Ff-EHEB_2oyTMoZlvL8OqWSc74WXQqQIrcw&s"
                    alt=""
                  />
                  {data && <p className="outgoing">lorem</p>}
                </div>
            </div>
            <div className="writing-bar">
                  <input type="text" onChange={(e) => setMessage(e.target.value)} />
                  <RiSendPlane2Line className="plane" onClick={(e)=>handleClick(e)} />
            </div>
        </div>
        ) : (
          <div className="start-messaging">
            <h2>Select a chat to start messaging...</h2>
          </div>
        )}
      
    </div>
  );
};
export default Center;
