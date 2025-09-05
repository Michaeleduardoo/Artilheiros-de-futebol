import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  const [scorers, setScorers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to show per page

  useEffect(() => {
    const fetchTopScorers = async () => {
      try {
        const response = await fetch(
          "https://api.api-futebol.com.br/v1/campeonatos/10/artilharia",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer live_25b9b0b058353ffa0456fd6e40fcf5",
            },
          }
        );

        const data = await response.json();
        setScorers(data);
      } catch (error) {
        console.error("Erro ao buscar os artilheiros:", error);
      }
    };

    fetchTopScorers();
  }, []);

  // Calculate the indices for slicing the data array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = scorers.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(scorers.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <h1>Artilharia do futebol </h1>
      <h2>Brasileiro de 2025</h2>

      {currentItems.map((scorer, index) => (
        <TransactionItem
          key={index}
          icon={<img src={scorer.time.escudo} alt={scorer.time.nome_popular} />}
          color="#f2dcbb"
          title={scorer.time.nome_popular}
          subtitle={scorer.atleta.nome_popular}
          amount={`${scorer.gols} Gols`}
          time={scorer.atleta.posicao?.nome || "Todas"}
          cardUsed={scorer.time.sigla}
          referenceId={scorer.atleta.posicao?.sigla || "Todas"}
        />
      ))}

      {/* Pagination Controls */}
      {scorers.length > itemsPerPage && (
        <div className="pagination-container">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  );
};

export default Transactions;
