import { Container, Pagination } from "react-bootstrap"



export const Pages = ({page, next , prev}) => {
  return (
    <div className="pages" 

    >

      <Pagination>

        <Pagination.Prev onClick={prev} />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />

      </Pagination>    
    </div>
      
  )
}
