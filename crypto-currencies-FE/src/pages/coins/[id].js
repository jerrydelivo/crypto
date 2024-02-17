import {
  StyledBackButton,
  StyledCell,
  StyledHeader,
  StyledRow,
  StyledTable,
  StyledWrapper,
} from "@/app/styles/markets";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MarketDetail() {
  const [coin, setCoin] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/coins/${id}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCoin(data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      <StyledBackButton onClick={goBack}> ❮ Back</StyledBackButton>
      <StyledWrapper>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeader>Price</StyledHeader>
              <StyledHeader>Name</StyledHeader>
              <StyledHeader>Description</StyledHeader>
              <StyledHeader>Change 24h</StyledHeader>
              <StyledHeader>Change 7d</StyledHeader>
              <StyledHeader>Change 14d</StyledHeader>
              <StyledHeader>Change 1m</StyledHeader>
              <StyledHeader>Change 2m</StyledHeader>
              <StyledHeader>Change 200d</StyledHeader>
              <StyledHeader>Change 1y</StyledHeader>
              <StyledHeader>High 24h</StyledHeader>
              <StyledHeader>Low 24h</StyledHeader>
            </tr>
          </thead>
          <tbody>
            <StyledRow>
              <StyledCell>{coin?.market_data?.current_price?.usd}</StyledCell>
              <StyledCell>{coin?.name}</StyledCell>
              <StyledCell>
                <div
                  dangerouslySetInnerHTML={{ __html: coin?.description?.en }}
                />
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_24h}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_7d}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_14d}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_30d}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_60d}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_200d}
              </StyledCell>
              <StyledCell>
                {coin?.market_data?.price_change_percentage_1y}
              </StyledCell>
              <StyledCell>{coin?.market_data?.low_24h?.usd}</StyledCell>
              <StyledCell>{coin?.market_data?.high_24h?.usd}</StyledCell>
            </StyledRow>
          </tbody>
        </StyledTable>
      </StyledWrapper>
    </>
  );
}
