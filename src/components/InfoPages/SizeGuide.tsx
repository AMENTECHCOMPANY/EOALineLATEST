import React from 'react';
import { X, Ruler, Users, Globe } from 'lucide-react';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuide: React.FC<SizeGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Ruler className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Size Guide</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* How to Measure */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-amber-600" />
              How to Measure
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Chest/Bust</h4>
                <p className="text-sm text-gray-600">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                
                <h4 className="font-semibold text-gray-800">Waist</h4>
                <p className="text-sm text-gray-600">Measure around your natural waistline, keeping the tape comfortably loose.</p>
                
                <h4 className="font-semibold text-gray-800">Hips</h4>
                <p className="text-sm text-gray-600">Measure around the fullest part of your hips, about 7-9 inches below your waist.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Inseam</h4>
                <p className="text-sm text-gray-600">Measure from the top of your inner thigh to your ankle bone.</p>
                
                <h4 className="font-semibold text-gray-800">Sleeve Length</h4>
                <p className="text-sm text-gray-600">Measure from your shoulder to your wrist with your arm slightly bent.</p>
                
                <h4 className="font-semibold text-gray-800">Shoulder Width</h4>
                <p className="text-sm text-gray-600">Measure from shoulder point to shoulder point across your back.</p>
              </div>
            </div>
          </div>

          {/* Men's Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Men's Sizes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Size</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Chest (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Waist (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Hips (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Inseam (inches)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">XS</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">26-28</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">30</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">S</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">28-30</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">M</td>
                    <td className="px-4 py-3">36-38</td>
                    <td className="px-4 py-3">30-32</td>
                    <td className="px-4 py-3">36-38</td>
                    <td className="px-4 py-3">32</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">L</td>
                    <td className="px-4 py-3">38-40</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">38-40</td>
                    <td className="px-4 py-3">32</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">XL</td>
                    <td className="px-4 py-3">40-42</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">40-42</td>
                    <td className="px-4 py-3">34</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">XXL</td>
                    <td className="px-4 py-3">42-44</td>
                    <td className="px-4 py-3">36-38</td>
                    <td className="px-4 py-3">42-44</td>
                    <td className="px-4 py-3">34</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Women's Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-pink-600" />
              Women's Sizes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Size</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Bust (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Waist (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Hips (inches)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Inseam (inches)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">XS</td>
                    <td className="px-4 py-3">30-32</td>
                    <td className="px-4 py-3">24-26</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">28</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">S</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">26-28</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">28</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">M</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">28-30</td>
                    <td className="px-4 py-3">36-38</td>
                    <td className="px-4 py-3">30</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">L</td>
                    <td className="px-4 py-3">36-38</td>
                    <td className="px-4 py-3">30-32</td>
                    <td className="px-4 py-3">38-40</td>
                    <td className="px-4 py-3">30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">XL</td>
                    <td className="px-4 py-3">38-40</td>
                    <td className="px-4 py-3">32-34</td>
                    <td className="px-4 py-3">40-42</td>
                    <td className="px-4 py-3">32</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">XXL</td>
                    <td className="px-4 py-3">40-42</td>
                    <td className="px-4 py-3">34-36</td>
                    <td className="px-4 py-3">42-44</td>
                    <td className="px-4 py-3">32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* International Sizes */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              International Size Conversion
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Men's Conversion</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold">US</th>
                        <th className="px-3 py-2 text-left font-semibold">EU</th>
                        <th className="px-3 py-2 text-left font-semibold">UK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="px-3 py-2">XS</td><td className="px-3 py-2">44</td><td className="px-3 py-2">34</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">S</td><td className="px-3 py-2">46</td><td className="px-3 py-2">36</td></tr>
                      <tr><td className="px-3 py-2">M</td><td className="px-3 py-2">48</td><td className="px-3 py-2">38</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">L</td><td className="px-3 py-2">50</td><td className="px-3 py-2">40</td></tr>
                      <tr><td className="px-3 py-2">XL</td><td className="px-3 py-2">52</td><td className="px-3 py-2">42</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">XXL</td><td className="px-3 py-2">54</td><td className="px-3 py-2">44</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Women's Conversion</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold">US</th>
                        <th className="px-3 py-2 text-left font-semibold">EU</th>
                        <th className="px-3 py-2 text-left font-semibold">UK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="px-3 py-2">XS</td><td className="px-3 py-2">32</td><td className="px-3 py-2">4</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">S</td><td className="px-3 py-2">34</td><td className="px-3 py-2">6</td></tr>
                      <tr><td className="px-3 py-2">M</td><td className="px-3 py-2">36</td><td className="px-3 py-2">8</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">L</td><td className="px-3 py-2">38</td><td className="px-3 py-2">10</td></tr>
                      <tr><td className="px-3 py-2">XL</td><td className="px-3 py-2">40</td><td className="px-3 py-2">12</td></tr>
                      <tr className="bg-gray-50"><td className="px-3 py-2">XXL</td><td className="px-3 py-2">42</td><td className="px-3 py-2">14</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Fit Guide */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Fit Guide</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Regular Fit:</strong> Comfortable, relaxed fit with room to move</li>
              <li>• <strong>Slim Fit:</strong> Tailored fit that follows your body's natural shape</li>
              <li>• <strong>Oversized:</strong> Loose, comfortable fit for a relaxed style</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;