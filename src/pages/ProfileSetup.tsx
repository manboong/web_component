import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFunnel } from "../hooks/useFunnel";
import PageContainer from "../components/container/PageContainer"
import UserTypeInput from "../components/input/UserTypeInput";
import StudentStepperCard from "../components/StudentStepperCard"
import StudentProfileInput from "../components/input/StudentProfileInput"
import EmailTokenInput from "../components/input/EmailTokenInput"
import CorpProfileInput from "../components/input/CorpProfileInput"

interface AcademicHistoryProps {
    school_id: number;
    degree: string;
    faculty: string;
    school_name: string;
    start_date: string;
    end_date: string;
    status: "Graduated" | "In Progress" | "Withdrawn";
}

export interface ExamProps {
    exam_id: number;
    exam_result: { class: string; level: number };
}

interface VerificationProps {
    userType: "student" | "corp" | "orgn";
    mail_address: string;
    token: string;
}

interface StudentProfileProps extends VerificationProps{
    name_glb: object;
    nationality: string;
    age: string;
    phone_number: string;
    emergency_contact: string;
    gender: "남자" | "여지" | "표시하지 않음" | "";
    image: string;
    has_car?: boolean;
    keyword_list?: object;
    academicHistory: AcademicHistoryProps[];
    examHistory: ExamProps[];
}
interface ConsumerProfileProps extends VerificationProps{
    corp_id?: number | null;
    orgn_id?: number | null;
    consumer_type: string;
    phone_number: string;
}

type ProfileProps = VerificationProps | StudentProfileProps | ConsumerProfileProps;

const ProfileSetup: React.FC = () => {
    const { control, handleSubmit, watch, reset } = useForm<ProfileProps>({
        defaultValues: {
            mail_address: "",
            token: "",
        },
    });

    const { Funnel, Step, setStep } = useFunnel("0");
    const userType = watch("userType");


    const onNextStep = () => {
        if (userType === "student") {
            setStep("1");
        } else if (userType === "corp") {
            setStep("5");
        } else if (userType === "orgn") {
            setStep("orgnNumber");
        }
    };

    return (
        <form onSubmit={() => {alert("submitted")}}> 
            <Funnel>
                {/* 공통 Step 1: User Type 선택 */}
                <Step name="0">
                    <PageContainer main={<UserTypeInput control={control} onNext={onNextStep} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

                <Step name="1">
                    <PageContainer main={<StudentProfileInput control={control} onNext={()=>setStep("2")} onPrevious={()=>setStep("0")} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

                <Step name="2">
                    <PageContainer main={<EmailTokenInput control={control} userType={userType} onSend={()=>{alert("token has sent")}} onSubmit={()=>alert("submitted")} onPrevious={()=>setStep("1")} />} side={<StudentStepperCard currentStep={5} />} />
                </Step>

                <Step name="3">
                    <PageContainer main={<StudentProfileInput control={control} onNext={()=>setStep("2")} onPrevious={()=>setStep("0")} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

                <Step name="4">
                    <PageContainer main={<StudentProfileInput control={control} onNext={()=>setStep("2")} onPrevious={()=>setStep("0")} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

                <Step name="5">
                    <PageContainer main={<CorpProfileInput control={control} onNext={()=>setStep("6")} onPrevious={()=>setStep("0")} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

                <Step name="6">
                    <PageContainer main={<EmailTokenInput control={control} userType={userType} onSend={()=>{alert("token has sent")}} onSubmit={()=>alert("submitted")} onPrevious={()=>setStep("5")} />} side={<StudentStepperCard currentStep={0} />} />
                </Step>

            </Funnel>
        </form>
    );
};

export default ProfileSetup;
