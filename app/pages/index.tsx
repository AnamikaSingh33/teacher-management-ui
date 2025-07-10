import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import TeacherDetails from '../components/TeacherDetails';
import QualificationTable from '../components/QualificationTable';
import ScheduleGrid from '../components/ScheduleGrid';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Teachers / Alynia Allan</h2>
          <TeacherDetails />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
            <QualificationTable title="Private Qualifications" />
            <QualificationTable title="Group Qualifications" />
          </div>
          <ScheduleGrid />
        </main>
      </div>
    </div>
  );
}
