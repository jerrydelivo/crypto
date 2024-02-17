import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  PaginationContainer,
  StyledCell,
  StyledClickableCell,
  StyledHeader,
  StyledRow,
  StyledTable,
  StyledWrapper,
} from "@/app/styles/markets";

export default function MarketsPage() {
  const [coins, setCoins] = useState(null);
  const [page, setPage] = useState(1);

  const router = useRouter();

  const handleCoinClick = (coin) => {
    router.push(`/coins/${coin.id}`);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/coins/markets?page=${page}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <tr>
            <StyledHeader>Name</StyledHeader>
            <StyledHeader>Symbol</StyledHeader>
            <StyledHeader>Current Price</StyledHeader>
            <StyledHeader>Low 24h</StyledHeader>
            <StyledHeader>High 24h</StyledHeader>
            <StyledHeader>Price change 24h</StyledHeader>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <StyledRow key={coin.id}>
              <StyledClickableCell onClick={() => handleCoinClick(coin)}>
                {coin.name}
              </StyledClickableCell>
              <StyledCell>{coin.symbol}</StyledCell>
              <StyledCell>{coin.current_price}</StyledCell>
              <StyledCell>{coin.low_24h}</StyledCell>
              <StyledCell>{coin.high_24h}</StyledCell>
              <StyledCell>{coin.price_change_percentage_24h}</StyledCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
      <PaginationContainer>
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            ❮
          </button>
          <button onClick={() => setPage((page) => page + 1)}>❯</button>
        </div>
      </PaginationContainer>
    </StyledWrapper>
  );
}
