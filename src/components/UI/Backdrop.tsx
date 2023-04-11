type BackdropProps = {
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => (
  <div onClick={onClick} className="backdrop"></div>
);

export default Backdrop;
