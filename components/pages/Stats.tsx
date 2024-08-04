const stats = [
    { id: 1, name: 'Questions On Leetcode', value: '110 +' },
    { id: 2, name: 'Questions On Geeks for Geeks', value: '50 +' },
    { id: 3, name: 'Web dev projects', value: '10+' },
  ];
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-lg sm:text-xl lg:text-2xl leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  