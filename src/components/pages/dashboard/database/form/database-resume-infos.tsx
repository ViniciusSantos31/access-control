export const DatabaseResumeInfos = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Connection details</h3>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-primary text-sm">Type</span>
            <span className="text-primary text-sm">PostgreSQL</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Username</span>
            <span className="text-primary text-sm">admin</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Host</span>
            <span className="text-primary text-sm">localhost</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Port</span>
            <span className="text-primary text-sm">5432</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Database details</h3>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-primary text-sm">Database name</span>
            <span className="text-primary text-sm">mydb</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Schema</span>
            <span className="text-primary text-sm">public</span>
          </div>
        </div>
      </div>
    </div>
  );
};
