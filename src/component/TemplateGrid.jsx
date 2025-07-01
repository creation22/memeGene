import { memeTemplates } from "../Data/template";

const TemplateGrid = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 text-white">
      {memeTemplates.map((template) => (
        <div
          key={template.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onSelect(template)}
        >
          <div className="border rounded-xl overflow-hidden shadow hover:scale-105 transition w-full">
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-40 object-cover"
            />
          </div>

          <p className="text-center mt-2 font-medium text-white">{template.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateGrid;
