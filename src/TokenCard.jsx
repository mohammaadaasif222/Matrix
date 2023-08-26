import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const TokenCard = ({ token }) => {

  return (
    <>
      <div className="col-md-3">
        <Card className="card-bg">
          <CardBody>
            <CardTitle className="card-title">Basic Info</CardTitle>
            <p>
              <span>Pair Created At</span>
              <span></span>
            </p>
            <p>
              <span>Symbol</span>
              <span>{token.baseToken.symbol}</span>
              <br />
            </p>
            <p>
              <span>Dex Id</span>
              <span>#{token.dexId.substring(0, 4)}</span> <br />
            </p>
            <p>
              <span>Pair Adress</span> {`          `}
              <span>#{token.pairAddress.substring(0, 4)}</span>
              <br />
            </p>

          </CardBody>
        </Card>
      </div>
      <div className="col-md-3">
        <Card className="card-bg">
          <CardBody>
            <CardTitle className="card-title">Base Token</CardTitle>
            <p>
              <span>Name</span>
              <span>{token.baseToken.name}</span>
            </p>
            <p>
              <span>Symbol</span>
              <span>{token.baseToken.symbol}</span>
              <br />
            </p>

            <p>
              <span>Adress</span> {`          `}
              <span>#{token.baseToken.address.substring(0, 4)}</span>
              <br />
            </p>

          </CardBody>
        </Card>
      </div>
      <div className="col-md-3">
        <Card className="card-bg">
          <CardBody>
            <CardTitle className="card-title">Quote Token</CardTitle>
            <p>
              <span>Name</span>
              <span>{token.quoteToken.name}</span>
            </p>
            <p>
              <span>Symbol</span>
              <span>{token.quoteToken.symbol}</span>
              <br />
            </p>
            <p>
              <span>Adress</span> {`          `}
              <span>#{token.quoteToken.address.substring(0, 4)}</span>
              <br />
            </p>

          </CardBody>
        </Card>
      </div>
      <div className="col-md-3">
        <Card className="card-bg">
          <CardBody>
            <CardTitle className="card-title">Price</CardTitle>
            <p>
              <span>Price Native</span>
              <span>{token.quoteToken.symbol +"   "+token.priceNative.substring(token.priceNative.length - 4)}</span>
            </p>
            <p>
              <span>Price USD</span>
              <span>{token.priceUsd.substring(token.priceUsd.length - 4)}</span>
              <br />
            </p>

          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TokenCard;
