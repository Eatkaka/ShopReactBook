import "./style.css";
function PaginationComponent({
  data,
  perPage,
  setCurrentPage,
  currentPage,
}) {
  // console.log("first", currentPage);
 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="pagination-custom">
          {/* <button
            disabled={currentPage === 1}
            className=" btn-direc noactive"
            onClick={handleBack}
          >
            Back
          </button> */}

          {pageNumbers.map((number, index) => {
              return (
                <button
                  key={index}
                  id={number}
                  className={number === currentPage ? ' active' : "noactive"}
                  onClick={()=>setCurrentPage(number)}
                >
                  {number}
                </button>
              );
          })}

          {/* <button
            disabled={currentPage >= pageNumbers.length}
            onClick={handleNext}
            className="btn btn-direc">   Next
           </button>*/}
      </div>
    </>
  );
}

export default PaginationComponent;
