import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImg } from "./services/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [nbPages, setNbPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const perPage = 12;

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total } = await fetchImg(query, page);
        setImages((prev) => [...prev, ...results]);
        setNbPages(Math.ceil(total / perPage));
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    return;
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const toggleIsOpen = () => {
    setIsModalOpen(false);
    setSelectedImageUrl(null);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      {isError ? (
        <ErrorMessage message="Image not found" />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {nbPages > 0 && page < nbPages && !isLoading && !isError && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={toggleIsOpen}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
};

export default App;
