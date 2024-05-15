const Title = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl font-bold text-marine-blue">{title}</h1>
    <p className="font-medium text-cool-gray">{children}</p>
  </div>
);

export default Title;
