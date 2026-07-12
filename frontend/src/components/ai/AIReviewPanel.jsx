import { useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

import api from "../../services/api";

import Card from "../ui/Card";
import Button from "../ui/Button";

function AIReviewPanel({

    code,

    language

}) {

    const [

        review,

        setReview

    ] = useState("");

    const [

        loading,

        setLoading

    ] = useState(false);

    const reviewCode = async () => {

        setLoading(true);

        toast.loading(

            "AI is reviewing your solution...",

            {

                id: "ai"

            }

        );

        try {

            const response = await api.post(

                "/api/ai/review",

                {

                    code,

                    language

                }

            );

            toast.success(

                "AI Review Completed",

                {

                    id: "ai"

                }

            );

            setReview(

                response.data.response

            );

        }

        catch (error) {

            console.log(error);

            toast.error(

                "AI Review Failed",

                {

                    id: "ai"

                }

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <Card>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-3xl font-bold">

                        🤖 AI Review

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Powered by Ollama + Qwen2.5

                    </p>

                </div>

                <Button

                    onClick={reviewCode}

                    disabled={loading}

                >

                    {

                        loading

                            ?

                            "Thinking..."

                            :

                            "✨ Review"

                    }

                </Button>

            </div>

            <div

                className="

                rounded-3xl

                bg-black

                border

                border-zinc-800

                p-8

                min-h-[450px]

                overflow-auto

                "

            >

                {

                    review

                        ?

                        <article

                            className="

                            prose

                            prose-invert

                            max-w-none

                            "

                        >

                            <ReactMarkdown>

                                {review}

                            </ReactMarkdown>

                        </article>

                        :

                        <div className="text-zinc-500">

                            <h3 className="text-xl mb-6">

                                AI Review

                            </h3>

                            <ul className="space-y-4">

                                <li>🐞 Bug Detection</li>

                                <li>⚡ Time Complexity</li>

                                <li>💾 Space Complexity</li>

                                <li>🚀 Better Algorithm</li>

                                <li>📖 Code Explanation</li>

                                <li>✨ Best Practices</li>

                            </ul>

                        </div>

                }

            </div>

        </Card>

    );

}

export default AIReviewPanel;