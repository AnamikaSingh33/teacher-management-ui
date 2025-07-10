import { Teacher } from '../types/teacher';

interface Props {
  teacher: Teacher;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TeacherCard({ teacher, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{teacher.name}</h3>
        <p className="text-sm text-gray-600">{teacher.subject}</p>
        <p className="text-sm text-gray-500">{teacher.email}</p>
        <p className="text-sm text-gray-500">{teacher.phone}</p>
        <p className="text-xs mt-1 text-green-600">{teacher.isActive ? 'Active' : 'Inactive'}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(teacher.id)} className="text-blue-600 hover:underline">Edit</button>
        <button onClick={() => onDelete(teacher.id)} className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
}
