import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 40px;
`;

export const StyledTable = styled.table`
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const StyledRow = styled.tr`
  background: #f6f6f6;
`;

export const StyledCell = styled.td`
  padding: 6px 12px;
`;

export const StyledClickableCell = styled(StyledCell)`
  cursor: pointer;
`;

export const StyledHeader = styled.th`
  font-weight: 900;
  color: #ffffff;
  background: #ea6153;
  padding: 6px 12px;
`;

export const PaginationContainer = styled.div`
  .pagination {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination button {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    background: none;
    cursor: pointer;
  }

  .pagination button:hover:not(:disabled) {
    background-color: #ddd;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledBackButton = styled.button`
  background: #ea8f53;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
