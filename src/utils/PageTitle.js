import Config from "./../config";

function PageTitle() {
  const url = window.location.pathname;
  const lastUrl = url.split("/")[1];
  if (lastUrl === "") {
    document.title = `Home / ${Config.app.title}`;
  } else {
    document.title =
      lastUrl.charAt(0).toUpperCase() +
      lastUrl.slice(1) +
      " / " +
      Config.app.title;
  }
}

export default PageTitle;
