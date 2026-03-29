"use client";

import { useState } from "react";
import Link from "next/link";

type Step1 = "interior" | "exterior" | null;
type Step2 = "residential" | "commercial" | null;
type Step3 = "single-room" | "whole-house" | "large-project" | null;

interface ResultData {
  title: string;
  body: string;
}

function getResult(
  step1: Step1,
  step2: Step2,
  step3: Step3
): ResultData {
  if (step1 === "interior" && step2 === "residential") {
    if (step3 === "single-room") {
      return {
        title: "Single Room Interior Repaint",
        body:
          "A focused job Nathan handles efficiently. We prep and fill surfaces, apply two quality coats, and leave the room clean and ready. Most single rooms are completed within a day.",
      };
    }
    if (step3 === "whole-house") {
      return {
        title: "Full Interior House Repaint",
        body:
          "We schedule a full walkthrough first to quote properly. Prep work is key here -- we fill, sand, and prime before any colour goes on. Most whole-house interior repaints take 2-5 days depending on size.",
      };
    }
    return {
      title: "Large Residential Interior Project",
      body:
        "For larger scope work, Nathan provides a detailed written quote with a clear timeline. We coordinate room by room so you can stay in the home throughout where possible.",
    };
  }

  if (step1 === "interior" && step2 === "commercial") {
    if (step3 === "single-room") {
      return {
        title: "Commercial Interior -- Single Space",
        body:
          "Office repaints, individual units, or single commercial rooms. We work around your business hours where possible. Quick turnaround with minimal disruption.",
      };
    }
    if (step3 === "whole-house") {
      return {
        title: "Multi-Room Commercial Interior",
        body:
          "Like our Braxmere Lodge project in Turangi, we handle multi-unit and multi-room commercial interiors. We stage the work logically to keep disruption low.",
      };
    }
    return {
      title: "Large-Scale Commercial Interior",
      body:
        "For lodges, apartment complexes, or large offices, Nathan visits the site, assesses the scope, and provides a comprehensive quote. We have experience with large repaints done efficiently.",
    };
  }

  if (step1 === "exterior" && step2 === "residential") {
    if (step3 === "single-room") {
      return {
        title: "Partial Exterior Repaint",
        body:
          "Feature walls, fences, garage doors, or a single elevation. We match paint accurately and prepare surfaces properly so the new coat lasts.",
      };
    }
    if (step3 === "whole-house") {
      return {
        title: "Full Exterior House Repaint",
        body:
          "Weatherboard, plaster, or cladding -- we prep thoroughly (water-blast, fill, prime) before applying exterior-grade paint. Palmerston North weather means prep matters more than most people realise.",
      };
    }
    return {
      title: "Large Exterior Residential Project",
      body:
        "Multi-building or complex exterior work. We assess access requirements, scaffolding needs, and surface condition. Full written quote with timeline provided.",
    };
  }

  if (step1 === "exterior" && step2 === "commercial") {
    if (step3 === "single-room") {
      return {
        title: "Commercial Exterior -- Partial Scope",
        body:
          "Specific elevations, fencing, or feature areas. Quoted per the scope -- no surprises. We work efficiently around business activity.",
      };
    }
    if (step3 === "whole-house") {
      return {
        title: "Full Commercial Exterior Repaint",
        body:
          "Offices, retail, or rental properties. We quote based on a site visit and provide a clear timeline. Surface prep is always included in our pricing.",
      };
    }
    return {
      title: "Large-Scale Commercial Exterior",
      body:
        "Apartment blocks, lodges, large commercial buildings. Nathan has done this before -- our Braxmere Lodge project involved 10 units. We provide a thorough quote after a site assessment.",
    };
  }

  return {
    title: "Custom Quote",
    body:
      "Not sure how to categorise your job? That's fine. Get in touch and Nathan will talk it through with you, visit the site, and provide a written quote at no obligation.",
  };
}

export default function JobFinder() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<Step1>(null);
  const [step2, setStep2] = useState<Step2>(null);
  const [step3, setStep3] = useState<Step3>(null);
  const [done, setDone] = useState(false);

  const handleStep1 = (val: Step1) => {
    setStep1(val);
    setStep(2);
  };

  const handleStep2 = (val: Step2) => {
    setStep2(val);
    setStep(3);
  };

  const handleStep3 = (val: Step3) => {
    setStep3(val);
    setDone(true);
  };

  const reset = () => {
    setStep(1);
    setStep1(null);
    setStep2(null);
    setStep3(null);
    setDone(false);
  };

  const result =
    done && step1 && step2 && step3 ? getResult(step1, step2, step3) : null;

  return (
    <div className="ep-job-finder">
      <h3 className="ep-job-finder-heading">What type of job do you have?</h3>
      <p className="ep-job-finder-sub">
        Answer three quick questions and we will point you in the right direction.
      </p>

      <div className="ep-job-finder-progress">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`ep-job-finder-dot${n <= step || done ? " active" : ""}`}
          />
        ))}
      </div>

      {!done && (
        <>
          {step === 1 && (
            <div>
              <div className="ep-job-finder-step-label">Step 1 of 3</div>
              <div className="ep-job-finder-question">
                Is the work interior or exterior?
              </div>
              <div className="ep-job-finder-options">
                <button
                  className={`ep-job-finder-option${step1 === "interior" ? " selected" : ""}`}
                  onClick={() => handleStep1("interior")}
                >
                  Interior
                </button>
                <button
                  className={`ep-job-finder-option${step1 === "exterior" ? " selected" : ""}`}
                  onClick={() => handleStep1("exterior")}
                >
                  Exterior
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="ep-job-finder-step-label">Step 2 of 3</div>
              <div className="ep-job-finder-question">
                Is this for a residential or commercial property?
              </div>
              <div className="ep-job-finder-options">
                <button
                  className={`ep-job-finder-option${step2 === "residential" ? " selected" : ""}`}
                  onClick={() => handleStep2("residential")}
                >
                  Residential
                </button>
                <button
                  className={`ep-job-finder-option${step2 === "commercial" ? " selected" : ""}`}
                  onClick={() => handleStep2("commercial")}
                >
                  Commercial
                </button>
              </div>
              <button className="ep-job-finder-back" onClick={() => setStep(1)}>
                Back
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="ep-job-finder-step-label">Step 3 of 3</div>
              <div className="ep-job-finder-question">
                What is the scope of the job?
              </div>
              <div className="ep-job-finder-options">
                <button
                  className={`ep-job-finder-option${step3 === "single-room" ? " selected" : ""}`}
                  onClick={() => handleStep3("single-room")}
                >
                  Single room / area
                </button>
                <button
                  className={`ep-job-finder-option${step3 === "whole-house" ? " selected" : ""}`}
                  onClick={() => handleStep3("whole-house")}
                >
                  Whole house / building
                </button>
                <button
                  className={`ep-job-finder-option${step3 === "large-project" ? " selected" : ""}`}
                  onClick={() => handleStep3("large-project")}
                >
                  Large project / multiple units
                </button>
              </div>
              <button className="ep-job-finder-back" onClick={() => setStep(2)}>
                Back
              </button>
            </div>
          )}
        </>
      )}

      {done && result && (
        <div>
          <div className="ep-job-finder-result">
            <div className="ep-job-finder-result-title">{result.title}</div>
            <div className="ep-job-finder-result-body">{result.body}</div>
          </div>
          <div className="ep-hero-ctas">
            <Link href="/contact" className="ep-btn-primary">
              Get a Quote for This
            </Link>
            <button className="ep-job-finder-back" onClick={reset}>
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
