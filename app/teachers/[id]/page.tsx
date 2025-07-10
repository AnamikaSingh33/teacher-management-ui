
import QualificationTable from '../../components/QualificationTable';
import ScheduleGrid from '../../components/ScheduleGrid';

export default function TeacherDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="space-y-6">
      {/* Teacher Info Section */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Teacher Details - ID: {params.id}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Name:</strong> Alynia Allan</p>
            <p><strong>Role:</strong> Teacher</p>
            <p><strong>Birth Date:</strong> 01 Jan 1980</p>
          </div>
          <div>
            <p><strong>Email:</strong> alynia@example.com</p>
            <p><strong>Phone:</strong> (416) 648-9057</p>
            <p><strong>Address:</strong> 36 Osbourne Cir, North York, Ontario</p>
          </div>
        </div>
      </section>

      {/* Qualification Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <QualificationTable title="Private Qualifications" />
        <QualificationTable title="Group Qualifications" />
      </div>

      {/* Weekly Schedule */}
      <ScheduleGrid />
    </div>
  );
}
