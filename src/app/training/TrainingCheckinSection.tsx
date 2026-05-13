import React from 'react';
 
interface CheckinSection {
  title: string;
  imageUrl?: string | string[];
  imageUrl2?: string | string[];
  content?: string;
  subtitle?: string;
  item?: Array<{ main: string; sub: string }>;
  ppt_imageUrl?: string[];
  title2?: string;
  content2?: string;
}
 
interface TrainingCheckinSectionProps {
  data: CheckinSection;
}
 
export default function TrainingCheckinSection({ data }: TrainingCheckinSectionProps) {
 
  const lines = data.content?.split('\n').filter(line => line.trim()) || [];
  const details = lines.slice(2, 6);
 
  const lines2 = data.content2?.split('\n').filter(line => line.trim()) || [];
  const details2 = lines2.slice(2, 6);
 
  const firstImageSrc: string | undefined = Array.isArray(data.imageUrl) ? data.imageUrl[0] : data.imageUrl;
  const secondImageSrc: string | undefined = Array.isArray(data.imageUrl2) ? data.imageUrl2[0] : data.imageUrl2;
 
  const section1GridClass = data.imageUrl ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : "flex justify-center gap-10";
  const section2GridClass = data.imageUrl2 ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : "flex justify-center gap-10";
 
  return (
    <div>
      {/* 첫 번째 섹션 */}
      <div className="mb-20 mt-20 bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-gray-200 text-gray-900">
          {data.title}
        </h2>
 
        <div className={section1GridClass}>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl p-2">
              <h3 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b-2 border-blue-500 inline-block">
                교육 과정 안내
              </h3>
              <div className="flex flex-col gap-4">
                {details.map((line, idx) => {
                  const [label, ...contentParts] = line.split(':');
                  const content = contentParts.join(':').trim();
                  return (
                    <div key={idx} className="flex gap-3 leading-relaxed">
                      <div className="text-gray-700 font-semibold text-sm min-w-[110px] flex-shrink-0">
                        {label.trim()}:
                      </div>
                      <div className="text-gray-900 text-sm flex-1">{content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
 
            <div className="rounded-xl p-2">
              <h4 className="text-gray-900 font-bold text-base mb-3">진행 예정 과정</h4>
              <div className="text-gray-700 text-sm leading-relaxed space-y-4">
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <p className="text-gray-900 font-bold mb-2">1. 꿈꾸는아이(AI) Digital Twin 직무혁신</p>
                  <p className="text-gray-600 text-sm">2026.05.28 (목) 14:00~18:00 (4시간)</p>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <p className="text-gray-900 font-bold mb-2">2. 디지털트윈 환경 구축과 시뮬레이션 실습</p>
                  <p className="text-gray-600 text-sm">2026.05.29 (금) 14:00~18:00 (4시간)</p>
                </div>
                <p className="pt-3 border-t border-gray-100 mt-4">
                  교육 과정에 관심 있는 분들의 많은 참여 부탁드립니다.
                </p>
                <p>
                  훈련 교안은 하단의{' '}
                  <span className="text-blue-600 font-bold mx-1">훈련 교안 다운로드</span>
                  버튼을 통해 언제든지 내려받으실 수 있습니다.
                </p>
              </div>
            </div>
 
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh0cjzUfDYtuQi7aCdaAJ27hqFbxk0rol2LoIEmT-huLBSjA/viewform?usp=header7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 rounded-xl text-sm font-semibold bg-[#1F92DF] text-white hover:brightness-105 transition-all duration-200 shadow-md hover:bg-cyan-600"
              >
                과정 신청 바로가기
              </a>
              <a
                href="https://drive.google.com/drive/folders/1SuZvyfbeNI7bmXlBc0LRJhwUErZlqdg6"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 rounded-xl text-sm font-semibold bg-white text-[#1F92DF] border-2 border-[#1F92DF] hover:bg-[#E8F1F6] transition-all duration-200"
              >
                훈련 교안 다운로드
              </a>
            </div>
          </div>
 
          <div className="flex items-start justify-center lg:justify-end">
            {firstImageSrc && (
              <div className="w-full max-w-lg sticky top-8">
                <img
                  src={firstImageSrc}
                  alt="훈련 포스터"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-gray-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
 
      {/* 두 번째 섹션 */}
      <div className="mb-20 mt-20 bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-gray-200 text-gray-900">
          {data.title2}
        </h2>
 
        <div className={section1GridClass}>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl p-2">
              <h3 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b-2 border-blue-500 inline-block">
                교육 과정 안내
              </h3>
              <div className="flex flex-col gap-4">
                {details.map((line, idx) => {
                  const [label, ...contentParts] = line.split(':');
                  const content = contentParts.join(':').trim();
                  return (
                    <div key={idx} className="flex gap-3 leading-relaxed">
                      <div className="text-gray-700 font-semibold text-sm min-w-[110px] flex-shrink-0">
                        {label.trim()}:
                      </div>
                      <div className="text-gray-900 text-sm flex-1">{content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
 
            <div className="rounded-xl p-2">
              <h4 className="text-gray-900 font-bold text-base mb-3">진행 예정 과정</h4>
              <div className="text-gray-700 text-sm leading-relaxed space-y-4">
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <p className="text-gray-900 font-bold mb-2">1. 에이전틱AI: 이제 '프롬프트' 대신 '행동'으로</p>
                  <p className="text-gray-600 text-sm">2026.05.28 (목) 14:00~18:00 (4시간)</p>
                </div>
                <p className="pt-3 border-t border-gray-100 mt-4">
                  교육 과정에 관심 있는 분들의 많은 참여 부탁드립니다.
                </p>
                <p>
                  훈련 교안은 하단의{' '}
                  <span className="text-blue-600 font-bold mx-1">훈련 교안 다운로드</span>
                  버튼을 통해 언제든지 내려받으실 수 있습니다.
                </p>
              </div>
            </div>
 
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://forms.gle/2nksH5AUZHiazNvQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 rounded-xl text-sm font-semibold bg-[#1F92DF] text-white hover:brightness-105 transition-all duration-200 shadow-md hover:bg-cyan-600"
              >
                과정 신청 바로가기
              </a>
              <a
                href="https://drive.google.com/drive/folders/1SuZvyfbeNI7bmXlBc0LRJhwUErZlqdg6"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 rounded-xl text-sm font-semibold bg-white text-[#1F92DF] border-2 border-[#1F92DF] hover:bg-[#E8F1F6] transition-all duration-200"
              >
                훈련 교안 다운로드
              </a>
            </div>
          </div>
 
          <div className="flex items-start justify-center lg:justify-end">
            {secondImageSrc && (
              <div className="w-full max-w-lg sticky top-8">
                <img
                  src={secondImageSrc}
                  alt="훈련 포스터"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-gray-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}