import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles";

function Policy() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        뒤로가기
      </button>

      <div style={styles.policyExplainContainer}>
        <h1 style={styles.title}>이용약관</h1>

        <div style={styles.policyBox}>
          <h6>
            본 약관은 사용자가 생성형 AI 기반 직업 분류 및 미래 모습 생성 프로젝트(이하 “서비스”)를 이용함에 있어 필요한 조건과 권리를 규정합니다. 서비스를 이용하기 전에 본 약관을 주의 깊게 읽어주시기 바랍니다. 본 약관에 동의하지 않을 경우, 서비스를 이용할 수 없습니다.
          </h6>
          <h5>1. 약관의 목적</h5>
          <h6>
            이 약관은 서비스 제공자와 사용자 간의 권리와 의무, 책임사항, 기타 필요한 사항을 규정하여 상호 신뢰와 만족스러운 서비스를 제공하는 데 목적이 있습니다.
          </h6>
          <h5>2. 서비스 제공 내용</h5>
          <h6>
            <ul>
              <li>직업 분류 및 분석: 사용자는 자신의 직업 및 관심 직업군을 선택하여 분석에 활용합니다.</li>
              <li>사진 업로드 및 AI 기반 미래 모습 생성:</li>
              <ul>
                <li>사용자는 자신의 현재 사진을 업로드합니다.</li>
                <li>AI는 사용자의 선택한 직업에 따라 미래의 모습을 예측하여 생성된 이미지를 제공합니다.</li>
              </ul>
            </ul>
          </h6>
          <h5>3. 서비스 이용 조건</h5>
          <h6>
            <ol>
              <li><strong>연령 제한:</strong> 사용자는 만 14세 이상이어야 서비스를 이용할 수 있습니다.</li>
              <li><strong>정확한 정보 제공:</strong> 사용자는 사진과 직업 분류와 관련한 정보를 정확히 제공해야 하며, 허위 정보 제공으로 발생한 결과에 대해 서비스 제공자는 책임지지 않습니다.</li>
              <li><strong>사용자의 권리:</strong> 사용자는 생성된 이미지를 개인적 목적으로 사용할 수 있습니다.</li>
              <li><strong>금지 사항:</strong> 타인의 사진을 무단으로 업로드하거나, 본 서비스를 불법적인 목적으로 사용하는 행위를 금지합니다.</li>
            </ol>
          </h6>
          <h5>4. 개인정보 처리 방침</h5>
          <h6>
            <ul>
              <li><strong>수집하는 정보:</strong> 사용자가 업로드한 사진, 직업 분류 정보, AI 생성 결과.</li>
              <li><strong>정보의 활용:</strong> 서비스 개선 및 연구 개발 목적에 한정하여 데이터를 사용합니다. 개인정보는 본 약관의 동의 범위를 초과하여 사용되지 않습니다.</li>
              <li><strong>보관 기간:</strong> 사용자의 사진은 서비스 제공 완료 후 30일 이내 삭제됩니다. 생성된 결과물은 익명화된 형태로 분석 데이터에 포함될 수 있습니다.</li>
              <li><strong>데이터 보안:</strong> 사용자의 데이터는 암호화 및 보안 프로토콜을 통해 보호됩니다.</li>
            </ul>
          </h6>
          <h5>5. 지적재산권</h5>
          <h6>
            <ul>
              <li>서비스 제공자가 생성한 이미지와 결과물에 대한 저작권은 사용자에게 귀속됩니다.</li>
              <li>서비스 제공자는 연구 및 서비스 홍보 목적으로 사용자 동의 하에 결과물을 활용할 수 있습니다.</li>
            </ul>
          </h6>
          <h5>6. 책임과 면책 조항</h5>
          <h6>
            <ul>
              <li><strong>책임 한계:</strong> AI 생성 이미지는 예측된 결과물로, 실제와 다를 수 있습니다. 서비스 제공자는 이에 대한 정확성을 보장하지 않습니다.</li>
              <li><strong>사용자 책임:</strong> 서비스 이용 중 사용자의 부주의로 발생한 문제에 대해 서비스 제공자는 책임을 지지 않습니다.</li>
              <li><strong>면책 사항:</strong> 서비스 제공자는 기술적 오류, 데이터 손실, 서비스 중단 등에 대해 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.</li>
            </ul>
          </h6>
          <h5>7. 서비스 이용 제한</h5>
          <h6>
            서비스 제공자는 다음의 경우 사용자에 대한 서비스 제공을 중단하거나 제한할 수 있습니다:
            <ul>
              <li>타인의 권리를 침해하거나 불법적인 콘텐츠를 업로드한 경우.</li>
              <li>시스템 해킹, 악성 코드 배포 등 서비스의 안정성을 위협한 경우.</li>
            </ul>
          </h6>
          <h5>8. 약관 변경 및 공지</h5>
          <h6>
            <ul>
              <li>본 약관은 서비스 운영 및 법령 변경에 따라 수정될 수 있습니다.</li>
              <li>약관 변경 시, 서비스 내 공지사항을 통해 사전에 알리며, 변경된 약관은 공지한 날로부터 7일 후 효력이 발생합니다.</li>
            </ul>
          </h6>
          <h5>9. 분쟁 해결</h5>
          <h6>
            <ul>
              <li>본 약관과 관련된 모든 분쟁은 대한민국 법령에 따라 해결되며, 관할 법원은 서비스 제공자의 소재지 법원으로 합니다.</li>
              <li>사용자는 분쟁 발생 시, 서비스 제공자와 협의를 통해 문제 해결을 시도해야 합니다.</li>
            </ul>
          </h6>
          <h5>10. 기물 파손</h5>
          <h6>
            <ul>
              메타스페이스 내 테블릿, 디스플레이 등의 전시기기 및 기물 파손 시 응당하는 대가를 지불해야 합니다. 이에 불응할 시 강경조치 들어갑니다. 아이그루스 300명에 달하는 회원들에게 질타와 손가락질을 받을 것입니다.
            </ul>
          </h6>
          <h5><strong>본 약관에 동의함으로써 사용자는 위의 조건에 따라 서비스를 이용할 것을 확인합니다.</strong></h5>
        </div>
      </div>

      <div style={styles.actionButtonsContainer}>
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            style={styles.checkbox}
          />
          <strong>
            
            이용약관에 동의합니다
            </strong>
        </label>
        <div>
          <button
            onClick={() => agree && navigate("/categoryselect")}
            disabled={!agree}
            style={{
              ...styles.agreeButton,
              backgroundColor: agree ? "#4caf50" : "#a9a9a9",
              cursor: agree ? "pointer" : "not-allowed",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Policy;
