
'use client';
import { Pencil, Trash2 } from 'lucide-react';
type Qualification = {
  id: number;
  course: string;
  level: string;
  year: number;
};

interface Props {
  title: string;
}

const mockData: Qualification[] = [
  { id: 1, course: 'Mathematics', level: 'Advanced', year: 2020 },
  { id: 2, course: 'Physics', level: 'Intermediate', year: 2019 },
  { id: 3, course: 'Chemistry', level: 'Basic', year: 2018 },
];

export default function QualificationTable({ title }: Props) {
  return (
    <section className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Course</th>
              <th className="p-2">Level</th>
              <th className="p-2">Year</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-2">{item.course}</td>
                <td className="p-2">{item.level}</td>
                <td className="p-2">{item.year}</td>
                <td className="p-2 text-right space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Pencil size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
