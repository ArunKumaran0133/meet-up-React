import {
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundBgContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundPara>
        We are sorry, the page you requested could not be found
      </NotFoundPara>
    </NotFoundBgContainer>
  </>
)

export default NotFound
