# Schedulify

gjwoo96/schedulify:test


docker build --tag gjwoo96/schedulify:test .

docker push gjwoo96/schedulify:test

//
// CI
1. git clone
2. 개발환경 설치(ex: java, python, nodejs...)
3. 컴파일
4. 테스트
5. 도커라이즈 (도커 이미지를 만들기, docker build)

// CD (Continuous Deployment)
6. 이미지 푸쉬


// CD (Continous Delivery)
7. prod 환경에 이미지를 run // kubectl


//
node = 컴퓨터
    - WorkerNode
    - MasterNode // ControlPlane
service
    - ClusterIP // 프라이빗 서비스
    - NodePort // 퍼블릭 서비스
pod = 컨테이너


//
npm start (리엑트 프로젝트 실행)
yarn create react-app . (.은 현재경로, 리엑트 프로젝트 생성 명령어)