'use client';

import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';

const FleetDashboard = () => {
  const [activeTab, setActiveTab] = useState('fleet');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const vehicles = [
    {
      number: 'MP44ZF9677',
      status: 'Offline since 7 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoidmNpb24wMmpucnI0bnJ6ZXJoamVzaGc0Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0NjgwLCJleHAiOjE3OTYzNjA2ODB9.gUtLeyEOxUzeQs5xeD9KkrOQW3ZUG3b_lNap-LF-CcI'
    },
    {
      number: 'KA05AQ5840',
      status: 'Offline since 7 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoidmNpb24wMmpucnI0bnJ6ZXJoamVzaGc0Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0NjgwLCJleHAiOjE3OTYzNjA2ODB9.gUtLeyEOxUzeQs5xeD9KkrOQW3ZUG3b_lNap-LF-CcI'
    },
    {
      number: 'KA05AQ5841',
      status: 'Offline since 5 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoibnJ3cjRwcGtyNnRjenpjYnhpdTY2aXJlIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0NzU5LCJleHAiOjE3OTYzNjA3NTl9.1PN7wuAxIoNEbd9N2SCoTMQMIXGPXJBGYeEGcaEpj9M'
    },
    {
      number: 'KA51AG2500',
      status: 'Offline since 6 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoia2Y5eW5qOGk3ZDR3cTJ3YzJkOHFybnk1Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0ODM4LCJleHAiOjE3OTYzNjA4Mzh9.JCZWj-5OuUhX6ACr8hrCizCdmr6ruibrooYHxptN36s'
    },
    {
      number: 'KA30A3415',
      status: 'Offline since 4 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiY2UzbW8ydjR0ZnMzdzdyN2Z0bXZqY3oxIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0ODgxLCJleHAiOjE3OTYzNjA4ODF9.l8b0Ev5gy7ccnFnPvyiq-oFwmY885SyIBwGT6iGa1j8'
    },
    {
      number: 'KA51AG2504',
      status: 'Offline since 8 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoicWFxbjE2OG1lZXNid2MzbzE4eHo0bWU0Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI0OTQzLCJleHAiOjE3OTYzNjA5NDN9.KNtgjxrAV46hId-T_c3HlBnzIujzwRFYwE38s_2bElQ'
    },
    {
      number: 'KA06AC3047',
      status: 'Offline since 3 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiZjgxcjlxbTlvb2p4ZzdvaHhzcWEzcHZmIiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MDA0LCJleHAiOjE3OTYzNjEwMDR9.XIkhMkuJ__QRBXnwCR1VVLAjyq388enYjFHHPG1E9TY'
    },
    {
      number: 'KA18C7787',
      status: 'Offline since 9 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoiYmsxZDhnYmp5MjA5Ym4wcWc5MmZ5eGI2Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MDU0LCJleHAiOjE3OTYzNjEwNTR9.cegCS8uX2Y2ZlVLGMTUx5geV_3GUDK3l5fd_gVuMW7k'
    },
    {
      number: 'MH12WX8766',
      status: 'Offline since 2 hours',
      driver: 'No Driver assigned',
      link: 'https://track.cautio.xyz/en?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZWhpY2xlX2lkIjoicG9uZGtnemRmaDV2NHBkZXA4M21ucXF3Iiwib3JnYW5pc2F0aW9uX2lkIjoiZmJ0bTVmemZiZm43YWpiM3k2OHpmd3RkIiwiYWN0aXZlX2Zyb20iOiIwMDowMCIsImFjdGl2ZV90byI6IjIzOjMwIiwiaWF0IjoxNzY0ODI1MTM5LCJleHAiOjE3OTYzNjExMzl9.GvGaU4hGFdJbECRX_aoCGbykkJFSq3ROvVnFlbx4rR0'
    }
  ];

  const filteredVehicles = vehicles.filter(v => 
    v.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = [
    { id: 'fleet', label: 'Your Fleet', count: vehicles.length },
    { id: 'trip', label: 'In-Trip', count: 0 },
    { id: 'idle', label: 'Idle', count: 0 },
    { id: 'stopped', label: 'Stopped', count: 0 },
    { id: 'offline', label: 'Offline', count: 0 },
    { id: 'low', label: 'Low network', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 space-y-6 z-50 transition-all ${menuOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">cautio</span>
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-400 hover:text-white lg:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-6 mt-8">
          <button className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            <Car size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold mb-2">COMMAND CENTER</h1>
              <p className="text-gray-400 italic">Welcome to a world where vehicles speak - and you listen in.</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.label} <span className="ml-2 text-sm">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by vehicle number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredVehicles.map((vehicle, index) => (
            
              key={index}
              href={vehicle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition cursor-pointer border border-gray-800 hover:border-blue-600"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs mb-4">
                  {vehicle.status}
                </span>
              </div>
              
              <div className="mb-6">
                <svg viewBox="0 0 200 100" className="w-full h-24 text-gray-300">
                  <rect x="30" y="20" width="140" height="60" rx="5" fill="currentColor" stroke="#4B5563" strokeWidth="2"/>
                  <rect x="45" y="30" width="30" height="20" fill="#374151"/>
                  <rect x="85" y="30" width="30" height="20" fill="#374151"/>
                  <rect x="125" y="30" width="30" height="20" fill="#374151"/>
                  <circle cx="55" cy="85" r="8" fill="#374151" stroke="#4B5563" strokeWidth="2"/>
                  <circle cx="145" cy="85" r="8" fill="#374151" stroke="#4B5563" strokeWidth="2"/>
                  <rect x="40" y="55" width="120" height="5" fill="#4B5563"/>
                </svg>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">IND</span>
                  </div>
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded font-bold">
                    {vehicle.number}
                  </span>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                {vehicle.driver}
              </div>

              <div className="mt-4 text-xs text-blue-400 hover:text-blue-300">
                View Movement History →
              </div>
            </a>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            No vehicles found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetDashboard;
