import React, { useEffect } from "react";
import "./Blockchain.css";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import link from "../../../assets/link.png";
import Moment from "moment";
import { CircularProgress } from "@material-ui/core";

const Blockchain = ({}) => {
  const [blockchain, setBlockchain] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getChain() {
      setLoading(true);
      axios
        .get("http://127.0.0.1:5000/blockchain")
        .then((response) => {
          setBlockchain(response.data.chain);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getChain();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="Blockchain">
        {loading === true ? (
          <CircularProgress color="#004a9d" />
        ) : (
          <div>
            {blockchain.map((block) => {
              return (
                <div className="block__container" key={block.hash}>
                  <div className="block">
                    <div className="left">
                      <div className="hash">{block.hash}</div>
                      <div className="index">
                        <b>Index: </b>
                        {block.index}
                      </div>
                      <div className="timestamp">
                        <b>Timestamp: </b>
                        {Moment(block.timestamp).format("DD/MM/YYYY, HH:mm")}
                      </div>
                      <div className="data">
                        <b>Data: </b>
                        {block.data}
                      </div>
                      <div className="nonce">
                        <b>Nonce: </b>
                        {block.nonce}
                      </div>
                      <div className="previous__hash">
                        <b>Previous Hash: </b>
                        {block.previous_hash}
                      </div>
                    </div>
                    <div className="right">
                      <div className="time">
                        <b>{Moment(block.timestamp).fromNow()}</b>
                      </div>
                    </div>
                  </div>
                  {block.index != blockchain.length - 1 ? (
                    <div className="link">
                      <img src={link} alt="Link" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blockchain;
